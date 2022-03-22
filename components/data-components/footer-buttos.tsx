import { PageType } from '@/components/types'
import { Button } from './button'

export default function FooterButtons({ data }: PageType) {
  return (
    <div className="grid md:justify-self-center grid-rows-auto-1fr gap-2.5">
      <Button
        className={
          'text-base text-blue px-8 py-2 rounded-full border-2 border-solid font-bold max-h-[44px]'
        }
        text={data.common.footerScheduleButton}
      />
      <Button
        className={
          'text-base text-blue px-8 py-2 rounded-full border-2 border-solid font-bold max-h-[44px]'
        }
        text={data.common.footerSupportUsButton}
      />
    </div>
  )
}
