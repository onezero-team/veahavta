import { PageType } from '@/components/types'
import { Button } from './button'

export default function FooterMenu({ data }: PageType) {
  return (
    <div className="justify-self-center">
      <h2 className="font-bold md:text-2xl">{data.common.footerMenuTitle}</h2>
      <div className="grid place-items-start gap-2.5 pt-2.5">
        <Button text={data.homepage.aboutHeading} />
        <Button text={data.common.footerContactUsTitle} />
        <Button text={data.common.footerSupportUsButton} />
      </div>
    </div>
  )
}
