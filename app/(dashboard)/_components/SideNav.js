import React, { useState, useEffect } from 'react'
import { Button } from './button'
import Link from 'next/link'
import {
  LayoutGrid,
  FileText,
  Upload,
  Users,
  Shield,
  Sun,
  Moon
} from "lucide-react"

const ScrollArea = ({ className = '', children }) => (
  <div className={`overflow-auto ${className}`}>{children}</div>
)

const Switch = ({ checked, onCheckedChange, size = 'default', icon }) => (
  <button
    className={`relative inline-flex ${size === 'lg' ? 'h-6 w-11' : 'h-5 w-9'} items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-primary' : 'bg-muted'}`}
    role="switch"
    aria-checked={checked}
    onClick={() => onCheckedChange(!checked)}
  >
    <span className={`${checked ? 'translate-x-5' : 'translate-x-0'} inline-block h-4 w-4 transform rounded-full bg-background transition-transform`}>
      {icon}
    </span>
  </button>
)

export default function Sidebar() {
  const [theme, setTheme] = useState('light')

  const menuList = [
    {
      id: 1,
      name: 'Overview',
      icon: LayoutGrid,
      path: '/overview',
      badge: 'New',
    },
    {
      id: 2,
      name: 'Upload',
      icon: Upload,
      path: '/upload',
      
    },
    {
      id: 3,
      name: 'Files',
      icon: FileText,
      path: '/files'
    },
    {
      id: 4,
      name: 'Shared with me',
      icon: Users,
      path: '/shared'
      
    },
    {
      id: 5,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade'
    }
  ]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="w-64 h-screen bg-background text-foreground border-r flex flex-col fixed left-0 top-0">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">FileShare</h1>
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={toggleTheme}
          size="lg"
          icon={theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        />
      </div>
      <ScrollArea className="flex-grow px-3">
        <nav className="space-y-1">
          {menuList.map((item) => (
            <NavItem 
              key={item.id}
              icon={<item.icon className="h-6 w-6" />}
              label={item.name}
              path={item.path}
              badge={item.badge}
            />
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

function NavItem({ icon, label, path, badge }) {
  return (
    <Link href={path} className="block">
      <Button 
        variant="ghost" 
        className="w-full justify-start h-16 text-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        {icon}
        <span className="ml-4">{label}</span>
        {badge && (
          <span className="ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500 text-white">
            {badge}
          </span>
        )}
      </Button>
    </Link>
  )
}