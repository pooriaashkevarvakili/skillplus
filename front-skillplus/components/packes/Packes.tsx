import { Card, Select } from "flowbite-react";

export default function Packages() {
    return (
        <div dir="rtl" className="xl:mr-20 lg:mr-20 laptop:mr-20 md:mr-20  mr-2 mt-4">
            <Card className="w-full max-w-[1100px] mx-auto">
                <div className="flex flex-col xl:flex-row laptop:flex-row justify-between items-start xl:items-center gap-4">
                    <div className="text-[#08BA6D] flex flex-col xl:flex-row laptop:flex-row items-start xl:items-center gap-4">
                        <span>قیمت پکیج آموزشی یا مشاوره</span>
                        <Select
                            id="countries"
                            required
                            className="w-full xl:w-[256px] h-[56px]"
                        >
                            <option>یک ساعت</option>
                            <option>نصف روز</option>
                            <option>کل روز</option>
                        </Select>
                    </div>

                    <div className="flex flex-col xl:flex-row laptop:flex-row items-start xl:items-center gap-4">
                        <div className="flex gap-4">
                            <div className="block">
                                <div>120000</div>
                                <div>تومان</div>
                            </div>
                            <div className="block">
                                <div>120000</div>
                                <div>تومان</div>
                            </div>
                            <div className="block">
                                <div>120000</div>
                                <div>تومان</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}