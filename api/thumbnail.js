module.exports = async function handler(req, res) {
  const { id } = req.query;

  if (!id || !/^\d+$/.test(id)) {
    return res.status(400).json({ error: 'Invalid video ID' });
  }

  try {
    const response = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=1280`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Referer': 'https://jeremydubs.com'
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: `Vimeo error: ${response.status}` });
    }

    const data = await response.json();

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json({
      thumbnail: data.thumbnail_url || null,
      title: data.title || null,
    });
  } catch (err) {
    console.error('Thumbnail fetch error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};
