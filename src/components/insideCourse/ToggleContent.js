import React from 'react'

export default function ToggleContent(props) {
  return (
    <div className='i-toggle-content'>
        {
            props.active == 0 && (
                <div className='i-toggle-description'>
                    <h2>Description</h2>
                    <p>The community's need for applications that can facilitate daily activities is increasing as technology advances. Currently, many companies are looking for developers so that they can sell products (goods or services) that can reach wider buyers online. To become a developer, we are not required to understand all the science of design, but at least we can know the basics so that we can realize the design into code into a complete application more effectively. This class is the right medium to learn design and coding at the same time. With Mentor, you will create useful applications by adding animations to applications that are made to make them more interesting and interactive.</p>
                    <p>Our expert Mentors will explain how to create a furniture application from the design to code stage using the flagship Google Flutter SDK framework. By using the popular design tool Figma, you will learn the basics of creating interactive mockups as an illustration into an application or commonly known as a prototype. Then you will learn to apply animation between screens to make the prototype come alive. After that, the process will continue to slicing with a variety of ready-to-use Flutter Widgets so that the developer's work can be more efficient, saving time and effort.</p>
                    <p>This class is suitable for those of you who want to deepen complete mobile application development on the front-end side. Later the application that is successfully built can become a portfolio for applying for work or your personal business needs. If you encounter difficulties while studying, please ask our Mentor directly through the Telegram group, OK? Register now and we are waiting in class!</p>
                    <h2>Key Point</h2>
                    <div>
                        <div className='i-tick-circle'>
                            <img src='asssetsIC/tick-circle.png' alt='tick-circle' className='i- tick-circle' />
                            <p>Understand the basics of Prototype & Animation</p>
                        </div>
                        <div className='i-tick-circle'>
                            <img src='asssetsIC/tick-circle.png' alt='tick-circle' className='i- tick-circle' />
                            <p>Understand the basics of MicroInteraction</p>
                        </div>
                        <div className='i-tick-circle'>
                            <img src='asssetsIC/tick-circle.png' alt='tick-circle' className='i- tick-circle' />
                            <p>Creating Animation (20 case studies) for mobile apps</p>
                        </div>
                        <div className='i-tick-circle'>
                            <img src='asssetsIC/tick-circle.png' alt='tick-circle' className='i- tick-circle' />
                            <p>Presenting designs using Animation</p>
                        </div>
                    </div>

                </div>

            )
        }

        {
            props.active == 1 && (
                <h2>Assignment</h2>
                )
        }

        {
            props.active == 2 && (
                <h2>Tools</h2>
                )
        }
    </div>
  )
}

// {props.options.map((option, index) => {
//   return <div key={index} className={props.className}>
//       <div>{option.name}</div>
//       {props.active == index && <Togggle />}
//   </div>
// })}




