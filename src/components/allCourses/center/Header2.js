import React, { useEffect } from 'react'

export default function Header2() {
    
    function handleClick(e){

        let targetEl = e.target;
        if(!targetEl.classList.contains("sort-click")){
            targetEl = targetEl.closest(".sort-click");
        }
        if(targetEl.nextElementSibling.style.display != "block"){
            let sort = document.querySelectorAll(".sort-options");
            sort.forEach(s => s.style.display = "none");
            targetEl.nextElementSibling.style.display = "block"
        }else{
            targetEl.nextElementSibling.style.display = "none"
        }
    }

    useEffect(() => {
        let options = document.querySelectorAll(".sort-option");
        options.forEach(option => {
            option.addEventListener("click", handleOptionSelect);
        })
    }, [])

    function handleOptionSelect(e){
        if(e.target.classList.contains("active")){
            e.target.classList.remove("active");
        }else{
            e.target.classList.add("active");
        }


    }
  return (
    <div className="header2">
        <div className="input">

            <input type="text" placeholder="Search  Course Name/Mentor"/>
        </div>
        <div>

            <div>
                <div className='sort-click' onClick={handleClick}>
                    <img src="assetsAc/rangelevel.png" alt=""/>
                    <p>level</p>
                </div>
                <div className='sort-options'>
                    <h2>By Level</h2>
                    <div>

                        <div className='sort-option'>All</div>
                        <div className='sort-option'>intermediate</div>
                        <div className='sort-option active'>Beginer</div>
                        <div className='sort-option'>Master</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='sort-click' onClick={handleClick}>

                    <img src="assetsAc/element-1category.png" alt=""/>
                    <p>category</p>
                </div>
                <div className='sort-options'>
                    <h2>By category</h2>
                    <div>

                        <div className='sort-option'>All</div>
                        <div className='sort-option active'>intermediate</div>
                        <div className='sort-option'>Beginer</div>
                        <div className='sort-option'>Master</div>
                    </div>
                </div>
            </div>

            <div>

                <div className='sort-click' onClick={handleClick}>
                    <img src="assetsAc/sort.png" alt=""/>
                    <p>sort By: popular</p>
                </div>
                <div className='sort-options'>
                    <h2>By popular</h2>
                    <div>

                        <div className='sort-option'>All</div>
                        <div className='sort-option active'>intermediate</div>
                        <div className='sort-option'>Beginer</div>
                        <div className='sort-option'>Master</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
