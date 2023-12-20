import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
  src = "#",
}) {
  return (
    console.log(heading, paragraph, linkName, linkUrl),
    (
      <div className="mb-10">
        <div className="flex justify-center">
          <img alt="" className="h-14 w-14" src={src} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {paragraph}{" "}
          <Link
            to={linkUrl}
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            {linkName}
          </Link>
        </p>
      </div>
    )
  );
}
