import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type ArrowButtonProps = {
	isOpen: boolean;
	toggleArrow: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const ArrowButton = (props: ArrowButtonProps): JSX.Element => {
	return (
		<div
			onClick={(e) => {
				props.toggleArrow(e);
			}}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: props.isOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: props.isOpen,
				})}
			/>
		</div>
	);
};