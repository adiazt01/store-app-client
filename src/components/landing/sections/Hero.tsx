import { NavbarLanding } from "../navbar/NavbarLanding"
import { ShapeBottom } from "../shape/ShapeBottom"

export const Hero = () => {
  return (
    <>
    <NavbarLanding />
      <section className="flex flex-col items-center justify-center h-[100vh]">
        <div className="flex gap-8 flex-col justify-center items-center">
          <div>
            <h1 className="text-3xl font-semibold text-center text-gray-900">
              Manage your store in one place
            </h1>
            <p className="text-xl font-light text-center">
              Simplified management, guaranteed success
            </p>
          </div>
          <div className="flex gap-4 flex-col items-center justify-center">
            <a
              href=""
              className="text-xl rounded text-center px-3 py-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              Start my store free
            </a>
            <a
              href=""
              className="text-xl font-normal border-2 border-gray-300 rounded text-center px-3 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              About us
            </a>
          </div>
        </div>
        <ShapeBottom />
      </section></>
  )
}
