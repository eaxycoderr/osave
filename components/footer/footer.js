import { useRouter  } from 'next/router'

export default function Footer() {
  const router = useRouter()

  return (
    <div>
    {
      router.pathname==='/404' ? 
      ''
      :
      <footer>
          <div className="inner_footer">
            <p>Copyright 2020</p>
          </div>
      </footer>
    }
    </div>
  )
}
