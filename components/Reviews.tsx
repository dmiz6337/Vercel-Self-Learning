import Review from "./Review";

interface ReviewData {
  rating: number;
  title: string;
  content: string;
  author: string;
  designation: string;
}

interface ReviewsProps {
  reviews?: ReviewData[];
}

const defaultReviews: ReviewData[] = [
  {
    rating: 5,
    title: "Unit 501 Leakage Maintenance",
    content:
      "Building management promptly came and addressed leakage in the 501 unit. Maintenance team quickly scheduled an appropriate time to work on the leak and executed efficiently.",
    author: "Jonas Aly",
    designation: "Unit 501 Tenant",
  },
  {
    rating: 5,
    title: "Payment Lodging Issue Resolved",
    content:
      "Payment lodgement portal was bugged last week. I filed an inquiry through the Strata Management Portal and the issue was resolved after a very short maintenance period.",
    author: "Mark Bures",
    designation: "Family Accountant",
  },
  {
    rating: 5,
    title: "Strata Management Portal",
    content:
      "Strata Management Portal is an extremely convenient and effective means of providing maintenance requests, accessing the latest body corporate documents and completing payments on time.",
    author: "William Kolas",
    designation: "Unit 104 Tenant",
  },
  {
    rating: 4,
    title: "Body Corporate Contacts",
    content:
      "The body corporate contact list was a super useful tooling for addressing a recent scheduling conflict for a body corporate board meeting. The provided information made it easy to reschedule and ensure that I was able to listen in on all the relevant meeting minutes.",
    author: "Andrew Chan",
    designation: "Strata Body Corporate Committee Member",
  },
];

const Reviews: React.FC<ReviewsProps> = ({ reviews = defaultReviews }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 text-gray-900 dark:text-white">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
