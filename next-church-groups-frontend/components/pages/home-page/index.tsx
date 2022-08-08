import Image from "next/image"
import React, { useState, useEffect } from "react"
import { GroupModel, HomePropType } from "../../../pages"
import SearchOrganism from "../../organisms/dropdown-organisms"

const filters = [
  {
    title: "Campus",
    filterString: "campus",
  },
  {
    title: "Demographic",
    filterString: "demographic",
  },
  {
    title: "Group Type",
    filterString: "group_type",
  },
  {
    title: "Dates",
    filterString: "meeting_date",
  },
  {
    title: "Zip codes",
    filterString: "zip_code",
  },
]
const HomePage: React.FC<HomePropType> = ({ groups }) => {
  const [filteredGroups, setFilteredGroups] = useState<GroupModel[]>([])
  const [filterVars, setFilteredVars] = useState({
    campus: null,
    demographic: null,
    group_type: null,
    meeting_date: null,
    zip_code: null,
  })
  useEffect(() => {
    let result: GroupModel[] = groups.map((group: GroupModel) => {
      if (
        filterVars.campus === null &&
        filterVars.demographic === null &&
        filterVars.group_type === null &&
        filterVars.meeting_date === null &&
        filterVars.zip_code === null
      ) {
        return group
      }
      if (filterVars.campus === group?.campus) {
        return group
      }
      if (filterVars.demographic === group?.demographic) {
        return group
      }
      if (filterVars.group_type === group?.group_type) {
        return group
      }
      if (filterVars.meeting_date === group?.meeting_date) {
        return group
      }
      if (filterVars.zip_code === group?.zip_code) {
        return group
      }
    })
    result = result.filter(function (element) {
      return element !== undefined
    })

    setFilteredGroups(result)
  }, [filterVars])
  useEffect(() => {
    setFilteredGroups(groups)
  }, [])
  return (
    <div className="p-4 space-y-4">
      <div className="bg-gray-200 bg-opacity-60 max-w-3xl mx-auto rounded-lg p-2 text-center">
        <h1 className="text-2xl font-bold">Welcome to Church Groups</h1>
        <p>This is a place where wonderful people support each other!</p>
      </div>

      <div className="bg-gray-200 bg-opacity-60 max-w-3xl mx-auto rounded-lg p-2 text-center">
        <div className="grid grid-cols-12 space-x-4">
          <div className="col-span-4">
            {filters.map((filter) => (
              <div>
                <p>{filter.title}</p>
                <SearchOrganism
                  options={filteredGroups.map((group: any) => ({
                    ...group,
                    label: group[filter.filterString],
                    value: group[filter.filterString],
                  }))}
                  onChange={(selectedgroup: anyl) => {
                    setFilteredVars({
                      ...filterVars,
                      [filter.filterString]: selectedgroup
                        ? selectedgroup[filter.filterString]
                        : null,
                    })
                  }}
                />
              </div>
            ))}
          </div>
          <div className="col-span-8 space-y-4">
            {filteredGroups.map((group: any) => (
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
                  <h2 className="text-2xl font-bold">{group.campus}</h2>
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
