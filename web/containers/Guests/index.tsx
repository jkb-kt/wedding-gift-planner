import { GuestInfoFragment } from "@codegen/generated/graphql";
import BigButton from "@components/Buttons/BigButton";
import Copy from "@components/Icons/Copy";
import Table from "@components/Table";
import { successToast } from "@components/Toast";
import { Routes } from "@utils/constants";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getGuestCounts, renderStatusIcon } from "./helpers";

const columns = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Status",
    accessor: "status",
  },
  {
    header: "Plus X",
    accessor: "plusX",
  },
  {
    header: "Invitation link",
    accessor: "link",
  },
];

interface Props {
  guests?: GuestInfoFragment[];
}

const Guests: React.FC<Props> = ({ guests }) => {
  const tableData = guests?.map((guest) => ({
    name: (
      <div>
        <Link href={Routes.GUEST.path.replace(":id", guest.id)}>
          {`${guest.firstName} ${guest.lastName}`}
        </Link>
        <>
          {guest.plusGuests.map((plusGuest, index) => (
            <span key={index}>{plusGuest}</span>
          ))}
        </>
      </div>
    ),
    status: renderStatusIcon(guest.status),
    plusX: guest.plusX,
    link: (
      <CopyToClipboard
        text={`${location.origin}/invitation?id=${guest.id}`}
        onCopy={() => successToast("Link copied!")}
      >
        <div>
          <Copy />
        </div>
      </CopyToClipboard>
    ),
  }));

  const guestCounts = getGuestCounts(guests);

  return (
    <>
      <h3>Guests</h3>
      <div>
        <div>
          <span>Invited</span>
          <span>{guestCounts?.total}</span>
        </div>
        <div>
          <span>Accepted</span>
          <span>{guestCounts?.accepted}</span>
        </div>
        <div>
          <span>Declined</span>
          <span>{guestCounts?.declined}</span>
        </div>
        <div>
          <span>Waiting</span>
          <span>{guestCounts?.waiting}</span>
        </div>
      </div>
      <Table columns={columns} data={tableData} />
      <BigButton link href={Routes.GUEST_NEW.path}>
        New Guest
      </BigButton>
    </>
  );
};

export default Guests;
