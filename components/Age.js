import React, { Fragment } from 'react'
import {
  differenceInMilliseconds,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns'

const Age = ({ age }) => {
  var today = new Date()
  const hisAge = new Date(age)
  const daysDiff = differenceInDays(today, hisAge)
  const weeksQuotient = Math.floor(daysDiff / 7)
  const weeksRemainder = daysDiff % 7
  const weeksAndDays = `${weeksQuotient} weeks${weeksRemainder > 1 &&
    `, ${weeksRemainder} days`}`

  const diffYears = differenceInYears(today, hisAge)
  const diffMonths = differenceInMonths(today, hisAge)
  const diffDays = differenceInDays(today, hisAge)
  const diffHours = differenceInHours(today, hisAge)
  const diffMins = differenceInMinutes(today, hisAge)
  const diffSecs = differenceInSeconds(today, hisAge)
  const diffMilSecs = differenceInMilliseconds(today, hisAge)
  // const longString = `${diffYears} year, ${diffMonths} months, ${diffDays} days, ${diffHours} hours, ${diffMins} mins, ${diffSecs} seconds and ${diffMilSecs} milliseconds`

  return (
    <Fragment>
      <h3>
        <div>
          {diffYears} year{diffYears > 1 && `s`}
        </div>
        <div>{diffMonths} months</div>
        <div>{weeksAndDays}</div>
        <div>{diffDays} days</div>
        <div>{diffHours} hours</div>
        <div>{diffMins} minutes</div>
        <div>{diffSecs} seconds</div>
        <div>{diffMilSecs} milliseconds</div>
      </h3>
    </Fragment>
  )
}

export default Age
