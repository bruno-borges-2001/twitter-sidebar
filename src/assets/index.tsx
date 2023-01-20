import { RiHome7Fill, RiHome7Line, RiFileListLine, RiFileListFill, RiUserHeartLine } from 'react-icons/ri'
import { HiHashtag } from 'react-icons/hi'
import { AiFillBell, AiOutlineBell } from 'react-icons/ai'
import { MdMail, MdMailOutline } from 'react-icons/md'
import { IoMdHelpCircleOutline, IoMdInformationCircleOutline, IoMdPerson } from 'react-icons/io'
import { IoBookmarkOutline, IoBookmark, IoPersonOutline, IoRocketOutline, IoSettingsOutline } from 'react-icons/io5'
import { SlSpeech } from 'react-icons/sl'
import { SiSimpleanalytics } from 'react-icons/si'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { CiMoneyBill } from 'react-icons/ci'
import { BsDisplay } from 'react-icons/bs'

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

export const MENU_ICON_BUTTONS = {
  Topics: {
    icon: <SlSpeech className='mr-2' />
  },
  'Twitter Circle': {
    icon: <RiUserHeartLine className='mr-2' />
  }
}

export const CREATOR_STUDIO_ICONS = {
  Analytics: {
    icon: <SiSimpleanalytics />
  }
}

export const TWITTER_FOR_PROFESSIONALS_ICONS = {
  'Twitter for Professionals': {
    icon: <IoRocketOutline />
  },
  'Twitter Ads': {
    icon: <RxOpenInNewWindow />
  },
  Monetization: {
    icon: <CiMoneyBill />
  }
}

export const SETTINGS_AND_SUPPORT_ICONS = {
  'Settings and privacy': {
    icon: <IoSettingsOutline />
  },
  'Help Center': {
    icon: <IoMdHelpCircleOutline />
  },
  Display: {
    icon: <BsDisplay />
  },
  'Keyboard shortcuts': {
    icon: <IoMdInformationCircleOutline />
  },
}

