import { Button } from "./button"
import FooterMenu from "./footer/footermenu"
import { PageType } from "./Types";
import ContactData from "@/components/contactdata";

export default function Footer({ data }: PageType) {
  return (
    <footer className="bg-light px-4 py-8 md:p-16 grid grid-cols-4">
      <div>icon</div>
      <div className="w-4/12 justify-self-center">
        <Button className={'text-base bg-[#FFFFFF] text-[#4E47F9] px-8 py-2 rounded-full mb-1 border-2 border-solid font-bold'}>{data.homepage.contactUsHeading}</Button>
        <Button className={'text-base bg-[#FFFFFF] text-[#4E47F9] px-8 py-2 rounded-full mt-1 border-2 border-solid font-bold'}>{data.homepage.contactUsHeading}</Button>
      </div>
      <FooterMenu data={data}></FooterMenu>
      <div className="">
        <h2 className="font-bold text-2xl">{data.homepage.contactUsHeading}</h2>
        {data.common.contactUsLinks.map((i: any, key: any) => {
          return (
            <ContactData linkType={i.linkType} text={i.text}
              imagePath={i.imagePath}
              key={key}
            />
          )
        })}
      </div>

    </footer>
  )
}
