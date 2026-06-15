export function createLanyardClient(discordConfig) {
  let timeoutId = null;

  const start = async (onActivity, onProfile, fallbackName) => {
    if (!discordConfig?.enabled) return;
    const userId = discordConfig.userId;
    if (!userId || userId === 'TU_DISCORD_ID') return;

    const poll = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json = await response.json();
        if (!json.success) return;

        const data   = json.data;
        const user   = data.discord_user;
        const status = data.discord_status || 'offline';

        if (typeof onProfile === 'function') {
          // Decoración del avatar
          const decoAsset = user?.avatar_decoration_data?.asset ?? null;

          onProfile({
            name:      (user?.global_name || user?.username || fallbackName || '').toLowerCase(),
            avatar:    user?.avatar
              ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=160`
              : undefined,
                          avatarDecoration: user?.avatar_decoration_data?.asset
              ? `https://cdn.discordapp.com/avatar-decoration-presets/${user.avatar_decoration_data.asset}.png?size=96&passthrough=true`
              : undefined,
            decoUrl:   decoAsset
              ? `https://cdn.discordapp.com/avatar-decoration-presets/${decoAsset}.png?size=96&passthrough=true`
              : null,
            banner:    user?.banner
              ? `https://cdn.discordapp.com/banners/${user.id}/${user.banner}.${user.banner.startsWith('a_') ? 'gif' : 'png'}?size=480`
              : null,
            accentColor: user?.accent_color ?? null,
            status,
          });
        }

        const activities = data.activities || [];
        const activity =
          activities.find(a => a.type === 2) ||  // Escuchando (Spotify, etc.)
          activities.find(a => a.type === 0) ||  // Jugando
          activities.find(a => a.type === 1) ||  // Streaming
          activities.find(a => a.type === 3) ||  // Viendo
          activities[0];

        if (activity && typeof onActivity === 'function') onActivity(activity);
      } catch (error) {
        console.warn('Lanyard error:', error);
      } finally {
        timeoutId = setTimeout(poll, 25_000);
      }
    };

    await poll();
  };

  const stop = () => { if (timeoutId) clearTimeout(timeoutId); };

  return { start, stop };
}
