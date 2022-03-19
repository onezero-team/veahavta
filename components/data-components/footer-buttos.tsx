import { PageType } from '@/components/types'
import { Button } from './button'

export default function FooterButtons({ data }: PageType) {
  return (
    <div className="grid justify-self-center grid-rows-auto-1fr">
            <Button
              className={
                  'text-base text-header-blue px-8 py-2 rounded-full mb-1 border-2 border-solid font-bold max-h-[44px]'
                }
              text={data.common.footerScheduleButton}
            />
                <Button
                  className={
                    'text-base text-header-blue px-8 py-2 rounded-full mb-1 border-2 border-solid font-bold max-h-[44px]'
                  }
                  text={data.common.footerSupportUsButton}
                />
          </div>
  )
}
