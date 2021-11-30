import React from 'react'
import "./about.css"
export default function About(props) {
    return (
        <div className="about-container">
            <div className="text-container">
                <h1 className="heading">Hello, We Are The Best</h1>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit labore esse, dolorum incidunt atque eveniet eligendi expedita pariatur consectetur suscipit tempore optio, modi facere odit sed! Sint accusamus deserunt nisi praesentium quia qui, ducimus veniam incidunt quam laboriosam eaque eius aliquid laborum nihil perspiciatis quisquam ex expedita ut doloribus odit reiciendis vel? Obcaecati rem ex pariatur nobis eum deserunt? Architecto dolorum dolor quibusdam deleniti nam maxime sunt temporibus quae, aliquam repellat aperiam illum nemo facilis commodi libero quisquam ab similique odit, vitae tempore aliquid veniam. Voluptas, officia sequi facilis aut excepturi amet consequatur illum expedita neque ad nam accusamus?</p>
            </div>
            <div className="image-container">
                <img src="https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0" alt={props.altText}/>
            </div>
        </div>
    )
}
