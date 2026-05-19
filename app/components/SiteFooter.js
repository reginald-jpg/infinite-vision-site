export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {year} Infinite Vision, Incorporated.</p>
      </div>
    </footer>
  );
}

