import { RiHome7Fill, RiHome7Line, RiFileListLine, RiFileListFill } from 'react-icons/ri'
import { HiHashtag } from 'react-icons/hi'
import { AiFillBell, AiOutlineBell } from 'react-icons/ai'
import { MdMail, MdMailOutline } from 'react-icons/md'
import { IoMdPerson } from 'react-icons/io'
import { IoBookmarkOutline, IoBookmark, IoPersonOutline } from 'react-icons/io5'

export const ICON_BUTTONS = {
  Home: {
    icon: <RiHome7Line />,
    selectedIcon: <RiHome7Fill />
  },
  Explore: {
    icon: <HiHashtag />,
    selectedIcon: <HiHashtag strokeWidth="0.5" />
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
  Profile: {
    icon: <IoPersonOutline />,
    selectedIcon: <IoMdPerson />
  },
}

