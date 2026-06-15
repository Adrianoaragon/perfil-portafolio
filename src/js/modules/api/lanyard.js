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

        const data = json.data;
        const user = data.discord_user;
        const status = data.discord_status || 'offline';

        if (typeof onProfile === 'function') {
          onProfile({
            name: (user?.global_name || user?.username || fallbackName || '').toLowerCase(),
            avatar: user?.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=160` : undefined,
            status,
          });
        }

        const activities = data.activities || [];
        const activity = activities.find((item) => item.type === 2)
          || activities.find((item) => item.type === 0)
          || activities.find((item) => item.type === 1)
          || activities.find((item) => item.type === 3)
          || activities[0];

        if (activity && typeof onActivity === 'function') onActivity(activity);
      } catch (error) {
        console.warn('Lanyard error:', error);
      } finally {
        timeoutId = setTimeout(poll, 25_000);
      }
    };

    await poll();
  };

  const stop = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  return { start, stop };
}