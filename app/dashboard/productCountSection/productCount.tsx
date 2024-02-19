import { Button } from "flowbite-react";

export default function ProductCount() {
  return (
    <>
      <div className="container mx-auto px-4 h-100 mt-5 mb-5">
        <p className="mt-10 mb-10 text-4xl font-bold text-center">
          Our Services
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <figure className="relative transition-all duration-300 cursor-pointer filter hover:grayscale-0">
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image description"
                />
              </a>
              <figcaption className="absolute px-4 text-lg text-white bottom-6">
                <p>
                  Do you want to get notified when a new component is added to
                  Flowbite?
                </p>
                <Button>Click me</Button>
              </figcaption>
            </figure>
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
