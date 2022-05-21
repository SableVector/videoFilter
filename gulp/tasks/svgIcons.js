import svgSprite from "gulp-svg-sprite";

export const svgIcons = () => {
	return app.gulp.src(app.path.src.iconssvg)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVG-ICON',
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: 'icons.svg',
					example: true
				}
			},
			shape: {
				// id: {
				// separator: '',
				// generator: 'svg-'
				// },
				transform: [
					{
						svgo: {
							plugins: [
								{ removeXMLNS: true },
								{ convertPathData: false },
								{ removeViewBox: false },
								{ removeDimensions: true },
								{ removeUselessStrokeAndFill: true },
							]
						}
					}
				]
			},
			svg: {
				rootAttributes: {
					style: 'display: none;',
					'aria-hidden': true
				},
				xmlDeclaration: false
			}
		}
		))
		.pipe(app.gulp.dest(app.path.build.images));
};
