import Image from "next/image"
import React, { useEffect } from "react"
import { HomePropType } from "../../../pages"
import { getGroups } from "../../../services"

const HomePage: React.FC<HomePropType> = ({ groups }) => {
  const getData = async () => {
    const groups = getGroups()
    console.log("🚀 ~ file: index.tsx ~ line 7 ~ getData ~ groups", groups)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="p-4 space-y-4">
      <div className="bg-gray-200 bg-opacity-60 max-w-3xl mx-auto rounded-lg p-2 text-center">
        <h1 className="text-2xl font-bold">Welcome to Church Groups</h1>
        <p>This is a place where wonderful people support each other!</p>
      </div>

      <div className="bg-gray-200 bg-opacity-60 max-w-3xl mx-auto rounded-lg p-2 text-center">
        <div className="grid grid-cols-12">
          <div className="col-span-4"></div>
          <div className="col-span-8 space-y-4">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-gray-50 rounded-lg flex p-2 space-x-2"
              >
                <Image
                  src={"https://picsum.photos/200/300"}
                  width="50px"
                  height="50px"
                  className="rounded-full"
                />
                <div className="text-start">
                  <h2 className="text-2xl font-bold">{group.group_type}</h2>
                  <p>{`${group.group_type}-${group.demographic}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
