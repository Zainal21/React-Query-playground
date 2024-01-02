import { classNames } from "../../utils/helper";
import { ArrowUpRightFromSquare, PenToSquare } from "./icons";

export interface CardContentProps {
  name: string;
  description: string;
  cta: string;
  link: string;
  secondaryCta?: string;
  secondaryLink?: string;
  image: string;
  icon?: any;
  foregroundColor: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  name,
  description,
  cta,
  link,
  secondaryCta,
  secondaryLink,
  image,
  icon: Icon,
  foregroundColor,
}) => {
  return (
    <li className="col-span-1 flex flex-col text-center  rounded-lg hover:shadow-2xl translate-x-1 ease-out divide-y divide-gray-200 shadow-xl">
      <div className="flex-1 flex flex-col p-8">
        {image ? (
          <img
            className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
            src={image}
            alt={name}
          />
        ) : Icon ? (
          <Icon
            className={classNames(
              foregroundColor,
              "w-16 h-16 flex-shrink-0 mx-auto"
            )}
          />
        ) : null}
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Description</dt>
          <dd className="text-gray-500 text-sm">{description}</dd>
        </dl>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          {secondaryLink && secondaryCta ? (
            <div className="w-0 flex-1 flex">
              <a
                href={secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm  text-gray-500 font-bold border border-transparent rounded-bl-lg hover:text-gray-600"
              >
                <PenToSquare
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">{secondaryCta}</span>
              </a>
            </div>
          ) : null}
          <div className="-ml-px w-0 flex-1 flex">
            {link && cta ? (
              <a
                href={
                  link.startsWith("http") || link.startsWith("/")
                    ? link
                    : `http://${link}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm  text-gray-500 font-bold border border-transparent rounded-br-lg hover:text-gray-600"
              >
                <span className="mr-3">{cta}</span>
                <ArrowUpRightFromSquare
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <button
                disabled
                className="cursor-not-allowed relative hover:shadow-md w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span>Belum ada link</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
