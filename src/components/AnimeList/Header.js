import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center mt-5">
      {/* replace jika terdapat karakter %20 artinya spasi dalam url maka akan diganti dengan spasi kosong */}
      <h2 className="text-3xl mb-2 font-medium">{title.replace(/%20/g, ' ')}</h2>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="text-red-600">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
