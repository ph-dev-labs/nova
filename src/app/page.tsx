import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

import HeroImage from "@/components/landing/HeroImage";
import Button from "@/components/landing/Button";
import Card from "@/components/landing/Card";
import Step from "@/components/landing/Step";
import Card2 from "@/components/landing/Card2";
import FAQCard from "@/components/landing/FAQCard";
import GreenLogo from "@/components/landing/GreenLogo";
import Image from "next/image";
import CustomersSlide from "@/components/landing/CustomersSlide";
import DropDownButton from "@/components/landing/DropDownButton";
import Nav from "@/components/landing/Nav";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className={inter.className}>
      <section className="bg-[#CCF6E5]">
        <Nav />
        <div className="w-[80%] py-4 mx-auto space-y-4 lg:space-y-8 flex itemx-center flex-col">
          <h1 className="text-[#013941] font-[900] text-md text-center lg:text-5xl">
            Simplifying Global Payments
            <span className="block lg:mt-4">With Virtual Cards</span>
          </h1>
          <p className="text-[#013941] text-xs text-center lg:text-lg font-[500]">
            With Novacrust&apos;s reliable virtual card,
            <span className="block">
              you can make borderless payments seamlessly.
            </span>
          </p>
          <div className="w-full flex items-center">
            <DropDownButton className="w-[16rem] lg:w-[16rem]">
              Download now
            </DropDownButton>
          </div>
          <div className="py-8 flex items-center justify-center w-full">
            <HeroImage />
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 lg:px-24 py-12 space-y-6">
          <Card
            color="#CCF6E5"
            title="Built For Personal and Business Use"
            description="For Creators, Students, Freelancers, Contractors, Entrepreneurs, Startups, Novacrust cards was built for your global financial needs."
            imageClassName="absolute right-0  bottom-0"
            btnTitle="Get a card now"
            imageUrl="./card-image-1.svg"
          />
          <Card
            color="#CBF5CD"
            title="Shop and Spend Global"
            description="Unlock the freedom to shop at your favorite online stores worldwide with Novacrust's USD virtual cards. Easily make purchases on platforms like Amazon, eBay, AliExpress, and more. Whether you're exploring global brands or supporting small businesses, our cards provide a seamless and secure way to shop across borders."
            imageClassName="absolute right-0  bottom-0"
            btnTitle="Get a card now"
            imageUrl="./card-image-2.svg"
          />
          <Card
            color="#F5F5CB"
            title="Pay Tuition with Ease"
            description="Simplify tuition payments with Novacrust. Use your virtual card to pay for education expenses on platforms like Flywire, Western Union Education Payments, or directly to institutions worldwide. Whether it’s college tuition or online courses, our cards ensure your transactions are secure and hassle-free."
            imageClassName="absolute right-0  bottom-0"
            btnTitle="Get a card now"
            imageUrl="./card-image-3.svg"
          />
          <Card
            color="#F5D2CB"
            title="Pay for Tools & Favourite Apps"
            description="Stay productive and entertained by subscribing to the tools and apps you love. Novacrust's virtual cards work with platforms like Netflix, Spotify, Adobe Creative Cloud, Google Workspace, and more. Pay for services with ease, enjoy uninterrupted access, and say goodbye to payment restrictions."
            imageClassName="absolute right-0  bottom-0"
            btnTitle="Get your card now"
            imageUrl="./tools.svg"
          />
          <Card
            color="#D4CBF5"
            title="Travel with Your Novacrust Card"
            description="Make your travels smoother with the Novacrust USD virtual card. Use it for booking flights on platforms like Expedia and Skyscanner, reserving hotels on Booking.com or Airbnb, and even hailing rides with Uber or Lyft. Plus, your card integrates seamlessly with Apple Pay, Google Pay, and other digital wallets, letting you make contactless payments worldwide. Travel confidently with secure and convenient transactions wherever you go!"
            imageClassName="absolute right-0  bottom-0"
            btnTitle="Get your travel card now"
            imageUrl="./plane.svg"
          />
        </div>
      </section>
      <section>
        <div className="px-4 lg:px-24 py-4 space-y-6">
          <div className="space-y-2 lg:space-y-6">
            <h2 className="font-[900] text-center text-lg lg:text-[40px]">
              Get started in 3 easy steps
            </h2>
            <div className="flex items-center justify-center">
              <Button className="w-[9rem] lg:w-[16rem] text-sm">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex items-center flex-col w-full justify-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-4">
            <Step
              title="Create your Novacrust Account"
              description="Sign up with just an email and get a free Novacrust account"
              id={1}
            />
            <Step
              title="Complete KYC in 2 minutes"
              description="Verify your identity using your government-issued documents"
              id={2}
            />
            <Step
              title="Get your Novacrust Virtual Card"
              description="Create multiple cards and start making payments seamlessly."
              id={3}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 lg:px-24 py-8 lg:py-16 space-y-6">
          <div className="lg:space-y-6">
            <h2 className="font-[900] text-center text-lg lg:text-[40px]">
              Why Choose Novacrust? 
            </h2>
            <p className="text-sm w-[80%] text-center mx-auto lg:text-lg">
              2,000+ people think we&apos;re the best thing since sliced bread
            </p>
          </div>
          <div className="space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-6">
            <Card2
              imageUrl="world.svg"
              bgColor="#CBF5CD"
              description="Get your USD virtual card in minutes and start transacting worldwide."
              title="Instant Global Access"
            />
            <Card2
              imageUrl="flash.svg"
              bgColor="#F5F1CB"
              description="Enjoy transparent pricing with no surprise fees."
              title="No Hidden Charges"
            />
            <Card2
              imageUrl="currency.svg"
              bgColor="#F5D2CB"
              description="Fund your card in your local currency; we handle the conversion."
              title="Multi-Currency Support"
            />
            <Card2
              imageUrl="security.svg"
              bgColor="#D4CBF5"
              description="Advanced encryption ensures safe and secure transactions."
              title="Robust Security"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F8FEFB]">
        <div className="px-4 lg:px-24 lg:py-16 py-8 space-y-6">
          <h2 className="font-[900] text-center text-lg lg:text-[40px]">
            Frequently Asked Questions
          </h2>
          <div className="py-4 space-y-6">
            <FAQCard
              text="How can I use my Novacrust virtual card?"
              content="You can use your Novacrust virtual card to shop online, pay for subscriptions, book travel, pay tuition, or make payments on platforms like Amazon, Netflix, Airbnb, and more. It also works with digital wallets like Apple Pay and Google Pay for seamless transactions."
            />
            <FAQCard
              text="Is the Novacrust virtual card secure?"
              content="Yes, our virtual cards are designed with advanced security features, including encryption and one-time card details for specific transactions. Your information is always protected against fraud and unauthorized access."
            />
            <FAQCard
              text="Can I top up my Novacrust card in local currency?"
              content="Yes, you can fund your Novacrust USD virtual card in your local currency. The amount will be automatically converted to U.S. dollars at the current exchange rate."
            />
            <FAQCard
              text="Does Novacrust work with all platforms?"
              content="While Novacrust cards are widely accepted, some platforms may have specific payment restrictions. Check the platform's payment options or contact our support team for assistance"
            />
            <FAQCard
              text="How do I link my Novacrust card to Apple Pay or Google Pay?"
              content="Simply add your Novacrust virtual card details to your digital wallet by following the wallet app's prompts. Once added, you can start making secure, contactless payments instantly."
            />
            <FAQCard
              text="How do I contact customer support?"
              content="Our support team is available 24/7 to assist you. Reach out to us via live chat, email, or the Help Center on our mobile app for quick solutions."
            />
          </div>
        </div>
      </section>
      <section className="bg-[#E6FBF2]">
        <div className="px-4 lg:px-24 py-8 lg:py-16 space-y-6 lg:space-y-0 lg:flex overflow-hidden">
          <CustomersSlide />
        </div>
      </section>
      <section className="bg-[#E6FBF2] hidden lg:block">
        <div className="w-[70%] bg-[#CCF6E5] mx-auto z-10 rounded-lg relative flex justify-between items-center px-24 py-8">
          <div className="space-y-4">
            <h4 className="text-[32px] font-bold">Get your Virtual Card Now</h4>
            <Button className="w-[12rem] lg:w-[16rem]">Download now</Button>
          </div>
          <Image src="./phone.svg" alt="phone" height={200} width={360} />
        </div>
        <div className="bg-[#013941] h-32 -mt-32 -z-10"></div>
      </section>
      <section className="bg-[#013941]">
        <div className="px-4 lg:px-24 py-8 lg:py-16 space-y-6">
          <GreenLogo />
          <div className="block lg:flex lg:justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-[#E6FBF2] text-md">USA</h4>
                <p className="text-[#80EABF] text-sm">
                  651 N Broad St, Suite 206 Middletown, Delaware 19709
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[#E6FBF2] text-md">NIGERIA</h4>
                <p className="text-[#80EABF] text-sm">
                  142 Ahmadu Bello Way, Victoria Island, Lagos 101241
                </p>
              </div>
            </div>
            <hr className="lg:hidden" />
            <div>
              <div className="space-y-4 lg:flex lg:justify-between lg:space-y-0 lg:space-x-6">
                <div className="space-y-2 flex flex-col">
                  <h4 className="text-[#E6FBF2] text-md">LEGAL</h4>
                  <Link
                    href="/privacy-and-policy"
                    className="text-[#80EABF] text-sm"
                  >
                    Privacy policy
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="text-[#80EABF] text-sm"
                  >
                    Terms and Conditions
                  </Link>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[#E6FBF2] text-md">CONTACT US</h4>
                  <p className="text-[#80EABF] text-sm">
                    support@novacrust.com
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[#E6FBF2] text-md">SOCIAL LINKS</h4>
                  <p className="text-[#80EABF] text-sm">Facebook</p>
                  <p className="text-[#80EABF] text-sm">Instagram</p>
                  <p className="text-[#80EABF] text-sm">Twitter</p>
                  <p className="text-[#80EABF] text-sm">Linkedin</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-center flex-col space-y-2">
            <p className="text-xs text-[#E6FBF2] text-center">
              © Copyright 2024
            </p>
            <p className="text-xs text-[#E6FBF2]">
              Made with ❤️ in New York & Lagos. Available 🌍
            </p>
            <p className="text-xs text-[#E6FBF2] text-center">
              Novacrust is a financial technology company, not a bank.
              <br />
              All banking services are provided by our licensed banking
              partners.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
