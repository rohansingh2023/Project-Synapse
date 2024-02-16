import Team from "../components/Team";

export default function Project() {
  return (
    <div className="flex flex-row justify-between p-10">
        <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold text-left">Project Title</h2>
            <div className="flex flex-col gap-4 text-xl">
              <p className="text-left opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam perspiciatis commodi tempora blanditiis reprehenderit. Aperiam molestias modi quae qui laboriosam suscipit, deleniti dicta provident esse consequatur sunt architecto in. Enim, libero ut fugit animi recusandae, a quasi numquam similique aliquam illo veniam nobis omnis laboriosam tempore iure ea autem ad odit atque quod ex, iusto fuga. Omnis maiores dignissimos consectetur aliquam non odit ullam temporibus asperiores magnam esse iure minima doloremque molestias illo saepe tenetur, ipsa facere enim quae voluptate rerum. Tenetur corrupti error quo totam laborum voluptatem soluta, tempore rerum nemo reprehenderit esse culpa earum laudantium necessitatibus nam reiciendis.</p>
              <p className="text-left opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam perspiciatis commodi tempora blanditiis reprehenderit. Aperiam molestias modi quae qui laboriosam suscipit, deleniti dicta provident esse consequatur sunt architecto in. Enim, libero ut fugit animi recusandae, a quasi numquam similique aliquam illo veniam nobis omnis laboriosam tempore iure ea autem ad odit atque quod ex, iusto fuga. Omnis maiores dignissimos consectetur aliquam non odit ullam temporibus asperiores magnam esse iure minima doloremque molestias illo saepe tenetur, ipsa facere enim quae voluptate rerum. Tenetur corrupti error quo totam laborum voluptatem soluta, tempore rerum nemo reprehenderit esse culpa earum laudantium necessitatibus nam reiciendis.</p>
              <p className="text-left opacity-60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam perspiciatis commodi tempora blanditiis reprehenderit. Aperiam molestias modi quae qui laboriosam suscipit, deleniti dicta provident esse consequatur sunt architecto in. Enim, libero ut fugit animi recusandae, a quasi numquam similique aliquam illo veniam nobis omnis laboriosam tempore iure ea autem ad odit atque quod ex, iusto fuga. Omnis maiores dignissimos consectetur aliquam non odit ullam temporibus asperiores magnam esse iure minima doloremque molestias illo saepe tenetur, ipsa facere enim quae voluptate rerum. Tenetur corrupti error quo totam laborum voluptatem soluta, tempore rerum nemo reprehenderit esse culpa earum laudantium necessitatibus nam reiciendis.</p>
            </div>
            <div>
              <iframe className="w-full min-h-[500px]" src="https://www.youtube.com/embed/WZOAtnI8u_g?si=NLfXUZMyxyvgGMRY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="text-left text-xl">
              <a className="text-blue-500 underline" href="http://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
        <Team />
    </div>
  )
}
