import React from 'react'

export default function Header2() {
  return (
    <div className="header2">
    <div className="input">

        <input type="text" placeholder="Search  Course Name/Mentor"/>
    </div>
    <div>

        <div>
            <img src="assetsAc/rangelevel.png" alt=""/>
            <p>level</p>
        </div>
        <div>
            <img src="assetsAc/element-1category.png" alt=""/>
            <p>category</p>
        </div>

        <div>
            <img src="assetsAc/sort.png" alt=""/>
            <p>sort By: popular</p>
        </div>
    </div>
</div>
  )
}
