import Link from "next/link";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full z-0 bored-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-t dark:border-light sm:text-base">
        <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className="flex items-center lg:py-2">
                Built With <span className="text-primary dark:text-primaryDark text-2x1 px-1">&hearts;</span>
                By&nbsp;<Link href="mailto:adevlin.booth@gmail.com" target="_blank" className="underline underline-offset-2">ADevlinB</Link>
            </div>
            <Link href="https://www.linkedin.com/in/devlin-booth/" target="_blank" className="underline underline-offset-2">LinkinIn</Link>
        </Layout>
    </footer>
  )
}
