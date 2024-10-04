'use client'
import React, { memo, useCallback, useState } from 'react'
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { AnimationTypes, ScrollAnimation } from '@/shared'

import { MAP_OPTIONS } from './constants/mapboxOptions'
import { POINTS } from './constants/points'
import locationIcon from './locationIcon.svg'

import 'mapbox-gl/dist/mapbox-gl.css'
import styles from './styles.module.scss'

type Point = {
    longitude: number
    latitude: number
    title: string
}

export const WorldMap = memo(() => {
    const [selectedPoint, setSelectedPoint] = useState<null | Point>(null)
    const t = useTranslations('points')

    const handleMarkerClick = useCallback(
        (point: Point) => (e: React.MouseEvent) => {
            e.stopPropagation()
            setSelectedPoint(point)
        },
        []
    )

    const handlePopupOnClose = useCallback(() => setSelectedPoint(null), [])

    return (
        <ScrollAnimation type={AnimationTypes.toLeft}>
            <div className={styles.map}>
                <Map {...MAP_OPTIONS}>
                    <>
                        {POINTS.map(({ id, longitude, latitude, title }) => (
                            <Marker key={id} longitude={longitude} latitude={latitude} anchor='bottom'>
                                <Image
                                    alt='markerImg'
                                    src={locationIcon}
                                    width={32}
                                    height={32}
                                    onClick={handleMarkerClick({ latitude, longitude, title })}
                                />
                            </Marker>
                        ))}
                    </>
                    {selectedPoint && (
                        <Popup
                            longitude={selectedPoint.longitude}
                            latitude={selectedPoint.latitude}
                            onClose={handlePopupOnClose}
                            anchor='bottom'
                        >
                            {t(selectedPoint.title)}
                        </Popup>
                    )}
                    <div className={styles.navigation}>
                        <NavigationControl position='top-left' showZoom={true} />
                    </div>
                </Map>
            </div>
        </ScrollAnimation>
    )
})
