// what about just import React from 'react' * as React etc. ??
import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, PageProps } from 'gatsby'
import axios from 'axios'
import useSWR from 'swr'
import { Card } from 'components/Card'
import { CardSkeleton } from 'skeletons'
// update imports

export type ApiResponseType = {
  id: string
  joke: string
  status: number
}

// abstract this into its own file, maybe
const fetcher = (url: string) =>
  axios
    .get(url, { headers: { Accept: 'application/json' } })
    .then((res) => res.data as ApiResponseType)
    // is necessary?
    .catch((err) => {
      throw err
    })

// error handling, interface vs type etc.
const IndexPage: React.FC<PageProps> = () => {
  const apiUrl = process.env.DAD_JOKE_API_URL
  const shouldFetch = apiUrl ? true : false
  const { data, error, isValidating } = useSWR(shouldFetch ? (apiUrl as string) : null, fetcher) // fix type conversion here, make it reusable

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Berke YONCACI</title>
      </Helmet>
      <div className="m-2 p-2 font-medium border-2 border-gray-200 text-gray-800">
        <div className="flex flex-col">
          <div className="m-2 text-4xl">
            Hi, I&apos;m <span className="text-purple-600">Berke</span>.
          </div>
          <div className="m-2 text-2xl">
            I am a <span className="text-gray-600">Computer Engineering</span> student at{' '}
            <span className="text-gray-600">Ankara University</span>.
          </div>
          <div className="m-2 text-2xl">
            I have been improving my skills over the course of my education. I am interested in a
            lot of fields in Computer Science.
          </div>
          <div className="m-2 text-2xl">
            Recently I have been working as a part-time{' '}
            <span className="text-indigo-800">Frontend Developer</span>.
          </div>
          <div className="m-2 text-2xl">Also I am a Graphics Programming enthusiast.</div>
        </div>
        {!error && (
          <div className="m-4 text-lg">
            {isValidating ? (
              <>
                <span className="text-pink-600">Here is a dad joke for you: </span>
                <CardSkeleton />
              </>
            ) : (
              data && (
                <>
                  <span className="text-pink-600">Here is a dad joke for you: </span>
                  <Card>{data.joke}</Card>
                </>
              )
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default IndexPage
