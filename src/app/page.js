import Image from 'next/image'
import { Container, Sidebar, Costum, Card } from '@/components'
import { Products } from '@/mocks/products'

export default function Home()
{
  const layout = 3
  return (
    <>
      <Container>
        <div className='flex justify-between'>
          <div className='w-1/4'>
            <Sidebar />
          </div>
          <div className='w-3/4'>
            <div className=''>
              <Costum />
            </div>
            <div>
              <div className={`w-full grid ${layout === 3 ? 'grid-cols-3' : 'grid-cols-2'}  gap-5 px-3`}>
                {
                  Products.map((item, index) => <Card tag={item.slug} data={item} key={index} />)
                }
              </div>
            </div>
          </div>
        </div>


      </Container>
    </>
  )
}
