import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 1000 }}>
        <ColorSchemeToggle />
      </div>
      <Welcome />
    </div>
  );
}
