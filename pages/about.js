import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Summary from '@/components/Summary'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>

            <div className="text-gray-400">Solutions Engineer</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="10" />
              <SocialIcon kind="github" href={siteMetadata.github} size="10" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="10" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="10" />
            </div>
          </div>
          <div className="divide-y divide-gray-700 col-span-2">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
