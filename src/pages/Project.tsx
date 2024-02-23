import { Team } from "../components";

export default function Project() {
  return (
    <div className="flex flex-col justify-between p-6 md:p-14 md:gap-10 md:flex-row">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-left">Project Title</h2>
        <div className="flex flex-col gap-4">
          <p className="text-left opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            perspiciatis commodi tempora blanditiis reprehenderit. Aperiam
            molestias modi quae qui laboriosam suscipit, deleniti dicta
            provident esse consequatur sunt architecto in. Enim, libero ut fugit
            animi recusandae, a quasi numquam similique aliquam illo veniam
            nobis omnis laboriosam tempore iure ea autem ad odit atque quod ex,
            iusto fuga. Omnis maiores dignissimos consectetur aliquam non odit
            ullam temporibus asperiores magnam esse iure minima doloremque
            molestias illo saepe tenetur, ipsa facere enim quae voluptate rerum.
            Tenetur corrupti error quo totam laborum voluptatem soluta, tempore
            rerum nemo reprehenderit esse culpa earum laudantium necessitatibus
            nam reiciendis.
          </p>
          <p className="text-left opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            perspiciatis commodi tempora blanditiis reprehenderit. Aperiam
            molestias modi quae qui laboriosam suscipit, deleniti dicta
            provident esse consequatur sunt architecto in. Enim, libero ut fugit
            animi recusandae, a quasi numquam similique aliquam illo veniam
            nobis omnis laboriosam tempore iure ea autem ad odit atque quod ex,
            iusto fuga. Omnis maiores dignissimos consectetur aliquam non odit
            ullam temporibus asperiores magnam esse iure minima doloremque
            molestias illo saepe tenetur, ipsa facere enim quae voluptate rerum.
            Tenetur corrupti error quo totam laborum voluptatem soluta, tempore
            rerum nemo reprehenderit esse culpa earum laudantium necessitatibus
            nam reiciendis.
          </p>
          <p className="text-left opacity-60">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            perspiciatis commodi tempora blanditiis reprehenderit. Aperiam
            molestias modi quae qui laboriosam suscipit, deleniti dicta
            provident esse consequatur sunt architecto in. Enim, libero ut fugit
            animi recusandae, a quasi numquam similique aliquam illo veniam
            nobis omnis laboriosam tempore iure ea autem ad odit atque quod ex,
            iusto fuga. Omnis maiores dignissimos consectetur aliquam non odit
            ullam temporibus asperiores magnam esse iure minima doloremque
            molestias illo saepe tenetur, ipsa facere enim quae voluptate rerum.
            Tenetur corrupti error quo totam laborum voluptatem soluta, tempore
            rerum nemo reprehenderit esse culpa earum laudantium necessitatibus
            nam reiciendis.
          </p>
        </div>
        <div>
          <iframe
            className="w-full h-[300px] md:min-h-[450px]"
            src="https://www.youtube.com/embed/WZOAtnI8u_g?si=NLfXUZMyxyvgGMRY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-left">
          <a
            className="text-blue-600 italic font-semibold underline"
            href="http://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <Team />
    </div>
  );
}
