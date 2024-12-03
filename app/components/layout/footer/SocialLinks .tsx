import Link from "next/link";
import Icon from '../../icons/Icons';

const nameIcons = ["telegram", "twitter", "github", "linkedin"];

function SocialLinks() {
    return (

        <div className="flex mt-4 sm:justify-center sm:mt-0">

            {
                nameIcons?.map((iconName, index) => (
                    <Link href="#" key={index} className="block dark:text-gray-200 mx-2">
                        <Icon name={iconName}/>
                    </Link>
                ))
            }

        </div>
    );
}

export default SocialLinks;