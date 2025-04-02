import { Outlet } from 'react-router';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qdxsysrayqrdahwjhwoe.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkeHN5c3JheXFyZGFod2pod29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1MTE1MTIsImV4cCI6MjA1OTA4NzUxMn0.8HEOSMpbuKpOkZOT3zYYwS4qwBWwXkGM3dJCySS8OrQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
	return (
		<>
			<Outlet />
		</>
	);
}
