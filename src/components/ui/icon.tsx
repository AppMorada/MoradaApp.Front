'use client'

import { RefAttributes, SVGProps } from 'react'

import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  CubeIcon,
  MegaphoneIcon,
  UserGroupIcon
} from '@heroicons/react/16/solid'

export const Icon = {
  calendarDays: CalendarDaysIcon,
  chevronDown: ChevronDownIcon,
  clipboardDocument: ClipboardDocumentListIcon,
  cube: CubeIcon,
  megaphone: MegaphoneIcon,
  userGroup: UserGroupIcon
}

export type IconType = typeof CubeIcon
export type IconName = keyof typeof Icon

export type DynamicIconProps = SVGProps<SVGSVGElement> &
  RefAttributes<SVGSVGElement> & {
    name: IconName
  }

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const IconComponent = Icon[name]
  return <IconComponent {...props} />
}
