import AuthenticatedLayout from "@/DepartmentManagerUser/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function Index(props) {
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            body: "",
        });
    function submint(e) {
        e.preventDefault();
        post(route("posts.store"), {
            onSuccess: () => {
                reset("body");
            },
        });
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    post Index
                </h2>
            }
        >
            <Head title="Posts">
                <meta name="description" content="Posts Index" />
            </Head>

            <div className="py-12">
                {data.body}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {errors.body}
                    <form
                        onSubmit={submint}
                        className="max-w-2xl bg-white rounded-lg border p-2 mx-auto mt-20"
                    >
                        <div className="px-3 mb-2 mt-2">
                            <textarea
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
                                onFocus={() => clearErrors("body")}
                                value={data.body}
                                placeholder="comment"
                                className="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                            ></textarea>
                            {errors.body && (
                                <div className="text-red-500">
                                    {errors.body}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end px-4">
                            <input
                                type="submit"
                                className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                                value="Comment"
                                disabled={processing}
                            ></input>
                        </div>
                    </form>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {props.posts.data.map((post) => {
                            return (
                                <div key={post.id}>
                                    <div className="font-semibold">
                                        {post.user.name}
                                    </div>
                                    <p className="mt-1">{post.body}</p>
                                </div>
                                // <div
                                //     className="p-6 text-gray-900"
                                //     key={post.id}
                                // >
                                //     {post.body}
                                // </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
