import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineUser,
	HiOutlineSearchCircle,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { FaQuestionCircle } from 'react-icons/fa';
import { FaCommentDots } from 'react-icons/fa';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'services',
		label: 'Services',
		path: '/admin/services',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/admin/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/admin/users',
		icon: <HiOutlineUsers />
	},
	{
		key: 'employee',
		label: 'Employee',
		path: '/employee',
		icon: <HiOutlineUser />
	},
	{
		key: 'job',
		label: 'Job Request',
		path: '/admin/job',
		icon: <HiOutlineSearchCircle />
	},
	{
		key: 'faq',
		label: 'FAQ',
		path: '/admin/faq',
		icon: <FaQuestionCircle />
	},
	{
		key: 'comments',
		label: 'Comments',
		path: '/comments',
		icon: <FaCommentDots />
	}
]

