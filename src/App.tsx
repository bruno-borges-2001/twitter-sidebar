import IconButton from "./components/IconButton"

import { RiHome7Fill, RiHome7Line, RiHashtag, RiFileListLine, RiFileListFill } from 'react-icons/ri'
import { AiFillBell, AiOutlineBell } from 'react-icons/ai'
import { MdMail, MdMailOutline } from 'react-icons/md'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'
import { SelectedItemContextProvider } from "./hooks/useSelectedItem"

function App() {
  return (
    <div className="text-white p-10">
      <SelectedItemContextProvider>
        <IconButton index={0} icon={<RiHome7Line />} selectedIcon={<RiHome7Fill />} label="Home" />
        <IconButton index={1} icon={<RiHashtag />} selectedIcon={<RiHashtag strokeWidth="1" />} label="Explore" />
        <IconButton index={2} icon={<AiOutlineBell />} selectedIcon={<AiFillBell />} label="Notifications" />
        <IconButton index={3} icon={<MdMailOutline />} selectedIcon={<MdMail />} label="Messages" />
        <IconButton index={4} icon={<IoBookmarkOutline />} selectedIcon={<IoBookmark />} label="Bookmarks" />
        <IconButton index={5} icon={<RiFileListLine />} selectedIcon={<RiFileListFill />} label="Lists" />
      </SelectedItemContextProvider>
    </div>
  )
}

export default App
