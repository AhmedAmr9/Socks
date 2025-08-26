import Image from "next/image"
import fs from "fs"
import path from "path"
import HeaderYellow from "/components/header-yellow"
import Footer from "/components/Footer"
import BackToTeamButton from "/components/BackToTeamButton"
import Gallery from "/components/Gallery"


export default function StaffProfile({ params }) {
  const { id } = params

  // Server-side: read files
  const memberFolder = path.join(process.cwd(), "public", "posts", id)
  let files = []
  try {
    files = fs.readdirSync(memberFolder)
  } catch {
    files = []
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <HeaderYellow />
      <div className="max-w-6xl mx-auto px-6 py-4">
        <BackToTeamButton />
      </div>

      <div className="py-10 px-6 max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src={`/staff/${id}.png`}
            alt={id}
            width={120}
            height={120}
            className="rounded-full border-4 border-yellow-500 shadow-md"
          />
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-center text-yellow-500 mb-20">
          {id}&apos;s Profile
        </h1>

        {files.length > 0 ? (
          <Gallery files={files} id={id} />
        ) : (
          <p className="text-center text-gray-600 text-lg">No posts yet.</p>
        )}
      </div>

      <Footer />
    </div>
  )
}