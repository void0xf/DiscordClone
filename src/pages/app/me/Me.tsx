import Sidebar from '../../../components/common/Sidebar/Sidebar'
import { ServerPreview } from '../../../types/user.t'
import  ExampleServerIcon  from '../../../assets/icons/Sidebar/ExampleServerIcon.svg'
import Navigation from '../../../components/features/HomeNavigation/Navigation'

const Me = () => {
  const dummyServers: ServerPreview[] = [
    {name: 'Test', SvgIcon: ExampleServerIcon}
  ]

  return (
    <div className='flex'>
      <section className='h-screen'>
        <Sidebar servers={dummyServers}/>
      </section>
      <section className='h-screen w-52'>
        <Navigation />
      </section>
      <section>

      </section>
    </div>
  )
}

export default Me
