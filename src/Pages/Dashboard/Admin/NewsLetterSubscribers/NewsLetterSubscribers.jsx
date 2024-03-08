import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const NewsLetterSubscribers = () => {
  const axiosPublic = useAxiosPublic();
  const {data: newsLetter=[]} = useQuery({
    queryKey: ['newsLetter'],
    queryFn: async () =>{
      const newsRes = await axiosPublic.get("/newsletter");
      return newsRes.data;
    }
  })
  return (
    <div className="my-10 h-fit rounded-xl bg-indigo-300">
      <h1 className="text-5xl pt-12 mb-24 font-serif text-center font-bold text-indigo-600">
        Newsletter Subscribers 
      </h1>
      <table className="table text-xl text-center">
                    {/* head */}
                    <thead>
                        <tr className="text-2xl text-gray-800">
                            <th>#</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newsLetter.map((news, index) => <tr key={news._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                  <p>{news.email}</p>
                                </td>
                            </tr>)
                        }
                    </tbody>
                  </table>
    </div>
  )
}

export default NewsLetterSubscribers;
