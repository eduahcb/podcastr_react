import { Outlet } from 'react-router'

export const AuthLayout = () => {
 return (
  <main className="relative h-screen w-full">
    <div className="absolute size-full">
      <img
        src="/images/bg-img.png"
        className="size-full"
        alt="background"
      />
    </div>
    <Outlet />
  </main>
 )
}
