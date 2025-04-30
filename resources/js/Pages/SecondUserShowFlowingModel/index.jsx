import AuthenticatedLayout from "@/EntreUser/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Flex,
    TextField,
    Button,
    Box,
    Grid,
    Select,
    Table,
    Text,
} from "@radix-ui/themes";
export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight"
                    dir="rtl"
                >
                    قائمة التقارير
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Grid columns=""></Grid>
                            <Flex justify="end">
                                <Text as="h6">قائمة التقارير</Text>
                            </Flex>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
