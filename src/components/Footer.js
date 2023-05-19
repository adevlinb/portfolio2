import Link from "next/link";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full bored-t-2 border-solid border-dark font-medium text-lg">
        <Layout className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear} &copy; All Rights Reserved</span>
            <div className="flex items-center">
                Built With <span className="text-primary text-2x1 px-1">&hearts;</span>
                By&nbsp;<Link href="https://xyla-books.herokuapp.com/" target="_blank" className="underline underline-offset-2">ADevlinB</Link>
            </div>
            <Link href="https://www.linkedin.com/in/devlin-booth/" target="_blank" className="underline underline-offset-2">LinkinIn</Link>
        </Layout>
    </footer>
  )
}
