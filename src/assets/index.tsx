import { RiHome7Fill, RiHome7Line, RiHashtag, RiFileListLine, RiFileListFill } from 'react-icons/ri'
import { AiFillBell, AiOutlineBell } from 'react-icons/ai'
import { MdMail, MdMailOutline } from 'react-icons/md'
import { IoBookmarkOutline, IoBookmark } from 'react-icons/io5'

export const ICON_BUTTONS = {
  Home: {
    icon: <RiHome7Line />,
    selectedIcon: <RiHome7Fill />
  },
  Explore: {
    icon: <RiHashtag />,
    selectedIcon: <RiHashtag strokeWidth="1" />
  },
  Notifications: {
    icon: <AiOutlineBell />,
    selectedIcon: <AiFillBell />
  },
  Messages: {
    icon: <MdMailOutline />,
    selectedIcon: <MdMail />
  },
  Bookmarks: {
    icon: <IoBookmarkOutline />,
    selectedIcon: <IoBookmark />
  },
  Lists: {
    icon: <RiFileListLine />,
    selectedIcon: <RiFileListFill />
  },
}

