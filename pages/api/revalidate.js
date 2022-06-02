// pages/api/revalidate.js

export default async function handler(req, res) {
  if (req.query.secret !== "testing") {
    return res.status(400).json({ message: "Invalid token" })
  }
  try {
    await res.unstable_revalidate('/ondemand')
    return res.json({ revalidated: true })
  } catch (err) {
    console.log(err)
    return res.status(500).send('Error revalidating')
  }

}