import MotivationGear from "@/components/motivation-gear";
import {render} from "@testing-library/react";

describe ('Motivation Gear', () => {
    [0, 2].forEach((val) => {
        it(`should render clockwise motivation gear for: ${val}`, () => {
            render(<MotivationGear index={val} motivator='crate' size='large'/>);

            const element = document.querySelector('.motivator-gear')!;
            const style = getComputedStyle(element);
            expect(style.animation).not.toContain("reverse");
        });
    });

    [1, 3].forEach((val) => {
        it(`should render counter-clockwise motivation gear for: ${val}`, () => {
            render(<MotivationGear index={val} motivator='crate' size='large'/>);

            const element = document.querySelector('.motivator-gear')!;
            const style = getComputedStyle(element);
            expect(style.animation).toContain("reverse");
        });
    });
});