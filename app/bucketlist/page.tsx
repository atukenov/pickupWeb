import { Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import bucketlist from '../../data/bucketList/list.json'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div>
        <h1 className="mb-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Bucket List 🗑️
        </h1>
        {bucketlist.map((val, i) => {
          return (
            <>
              <div className="flex align-middle">
                <div className="mr-2 text-2xl">{val.id}.</div>
                <div className={`title mr-2 text-2xl ${val.completed ? 'line-through' : null}`}>
                  {' '}
                  {val.title}
                </div>
                {val.completed ? <div className="text-2xl">✅</div> : null}
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
